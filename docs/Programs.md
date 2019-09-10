# Student Companion API
Below are the endpoints
## Program endpoints
- **Get all Programs:**
`no body, no parameter`
endpoint `GET - /api/program`
response `Array of programs`
```json
[{
    "title": String,
    "code": String,
    "courses": Array
}]
```

- **Get one Program:**
`no body, has parameter - {code}`
endpoint `GET - /api/program/:code`
response `Program Object`
```json
{
    "title": String,
    "code": String,
    "courses": Array
}
```

- **Insert Program:**
`has body - {title, code}, no parameter`
endpoint `POST - /api/program/`
response `new Program Object`
```json
{
    "title": String,
    "code": String,
    "courses": Array
}
```

- **Update Program:**
`has body - {title || code}, has parameter - {code}`
endpoint `PUT - /api/program/:code`
response `updated Program Object`
```json
{
    "title": String,
    "code": String,
    "courses": Array
}
```

- **Delete Program:**
`no body , has parameter - {code}`
endpoint `DELETE - /api/program/:code`
response `deleted Program code`
```json
{
    "code": String,
}
```
