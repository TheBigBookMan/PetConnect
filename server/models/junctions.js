const CreateUserFollows = `
    CREATE TABLE UserFollows (
        FollowerID INT,
        FollowingID INT,
        CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (FollowerID, FollowingID),
        FOREIGN KEY (FollowerID) REFERENCES User(UserID),
        FOREIGN KEY (FollowingID) REFERENCES User(UserID)
    );
`;

module.exports = [CreateUserFollows];
