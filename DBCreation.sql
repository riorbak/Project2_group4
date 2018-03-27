CREATE TABLE boer (
    username TEXT PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    birthdate DATE,
    profile_pic TEXT,
    cover_pic TEXT
);

CREATE TABLE limb (
    id SERIAL PRIMARY KEY NOT NULL,
    post_text TEXT,
    time_stamp TIMESTAMP,
    author TEXT,
    FOREIGN KEY (author) REFERENCES boers(username)
        ON DELETE CASCADE 
);

CREATE TABLE boer_limb (
    author TEXT,
    limb_id INTEGER,
    FOREIGN KEY (author) REFERENCES boers(username)
        ON DELETE CASCADE,
    FOREIGN KEY (limb_id) REFERENCES limbs(id)
        ON DELETE CASCADE
);

CREATE TABLE liked_limb (
    liker TEXT,
    limb_id INTEGER,
    FOREIGN KEY (liker) REFERENCES boers(username)
        ON DELETE CASCADE,
    FOREIGN KEY (limb_id) REFERENCES limbs(id)
        ON DELETE CASCADE
);