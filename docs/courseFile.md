# Student Companion API
Below are the endpoints
## Program endpoints
- **Get all files in a course:**
`no body, has parameter - {code}`
endpoint `GET - /api/cfile/:code`
response `Array of Files`
```json
[{
    "title": String,
    "uri": String,
    "extension": String,
    "size": Number,
    "author": String,
    "isLecturer": Boolean
}]
```

- **Add file to course:**
`has body - {title,uri,extension,size,author,isLecturer}, has parameter - {code}`
endpoint `POST - /api/cfile/:code`
response `new File Object`
```json
{
    "title": String,
    "uri": String,
    "extension": String,
    "size": Number,
    "author": String,
    "isLecturer": Boolean
}
```

- **Delete file from Course:**
`has body - {uri}, has parameter - {code}`
endpoint `DELETE - /api/cfile/:code`
response `remaining files in course`
```json
[{
    "title": String,
    "uri": String,
    "extension": String,
    "size": Number,
    "author": String,
    "isLecturer": Boolean
}]
```
