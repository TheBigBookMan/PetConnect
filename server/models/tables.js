const CreateUserTable = `
    CREATE TABLE User (
        UserID INT PRIMARY KEY AUTO_INCREMENT,
        Username VARCHAR(255) NOT NULL UNIQUE,
        Password VARCHAR(255) NOT NULL,
        Email VARCHAR(255) NOT NULL UNIQUE,
        PetType VARCHAR(50),
        ProfilePicURL VARCHAR(255),
        CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;

const CreatePostTable = `
    CREATE TABLE Post (
        PostID INT PRIMARY KEY AUTO_INCREMENT,
        UserID INT,
        ImageURL VARCHAR(255) NOT NULL,
        Caption TEXT,
        LikesCount INT DEFAULT 0,
        CommentsCount INT DEFAULT 0,
        Location VARCHAR(255),
        CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (UserID) REFERENCES User(UserID)
    );
`;

const CreateCommentTable = `
    CREATE TABLE Comment (
        CommentID INT PRIMARY KEY AUTO_INCREMENT,
        PostID INT,
        UserID INT,
        ParentCommentID INT NULL,
        CommentText TEXT NOT NULL,
        CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (PostID) REFERENCES Post(PostID),
        FOREIGN KEY (UserID) REFERENCES User(UserID),
        FOREIGN KEY (ParentCommentID) REFERENCES Comment(CommentID)
    );
`;

module.exports = [CreateUserTable, CreatePostTable, CreateCommentTable];
