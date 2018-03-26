package com.revature.limbo.service;

import java.io.InputStream;
import java.util.Date;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.PutObjectResult;

@Service
public class AmazonBucketService {
	private AmazonS3 s3client;
	
	@Value("${amazonProperties.endpointUrl}")
	private String endpointUrl;
	
	@Value("${amazonProperties.bucketName}")
	private String bucketName;
	
	@Value("${amazonProperties.accessKey}")
	private String accessKey;
	
	@Value("${amazonProperties.secretKey}")
	private String secretKey;
	
	
	@PostConstruct
	private void initializeAmazon() {
		BasicAWSCredentials credentials =
				new BasicAWSCredentials(this.accessKey, this.secretKey);
		
		this.s3client = AmazonS3ClientBuilder
						.standard()
						.withCredentials(
							new AWSStaticCredentialsProvider(credentials))
						.withRegion(Regions.US_EAST_2)
						.build();
	}
	
	private String generateFilename(MultipartFile mf) {
		return new Date().getTime() + "-" + mf.getOriginalFilename().replace(" ", "_");
	}
	
	
	
	public String uploadFile(MultipartFile mf) {
		String fileUrl = "";
		
		try(InputStream fileInStream = mf.getInputStream()) {
			String filename = generateFilename(mf);
			ObjectMetadata fileMetadata = new ObjectMetadata();
			fileMetadata.setContentLength(mf.getSize());
			
			s3client.putObject(
				new PutObjectRequest(
					bucketName, 
					filename,
					fileInStream,
					fileMetadata)
				.withCannedAcl(CannedAccessControlList.PublicRead)
			);
			
			fileUrl = endpointUrl + "/" + bucketName + "/" + filename;
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
		
		return fileUrl;
	}
	
	public void deleteFileFromS3Bucket(String fileUrl) {
		String fileName = fileUrl.substring(fileUrl.lastIndexOf("/") + 1);
		s3client.deleteObject(new DeleteObjectRequest(
				bucketName + "/", fileName));
	}
}
