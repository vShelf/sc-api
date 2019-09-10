# Student Companion API
Below are the endpoints
## Program endpoints
- **Get all Courses in a program:**
`no body, has parameter - {code}`
endpoint `GET - /api/pcourse/:code`
response `Array of Courses`
```json
[{
    "code": String,
    "programs": [Schema_ID]
    "files": [Files]
}]
```

- **Add course to program:**
`has body - {code?course code}, has parameter - {code?program code}`
endpoint `POST - /api/pcourse/:code`
response `new Course Object`
```json
{
    "code": String,
    "programs": [Schema_ID],
    "files": [Files]
}
```
