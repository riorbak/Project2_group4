package com.revature.utils;

public class Pair<T, U> {
	private T first;
	private U second;
	
	public Pair() {
		setFirst(null);
		setSecond(null);
	}
	
	public Pair(T first, U second) {
		this.setFirst(first);
		this.setSecond(second);
	}

	public T getFirst() {
		return first;
	}

	public void setFirst(T first) {
		this.first = first;
	}

	public U getSecond() {
		return second;
	}

	public void setSecond(U second) {
		this.second = second;
	}
}
