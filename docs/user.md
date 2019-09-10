# Student Companion API
Below are the endpoints
## Program endpoints
- **Register new user:**
`has body - {email, password}, no parameter`
endpoint `GET - /api/user/new`
response `new user token`
```json
{
    "token": String
}
```

- **Login a user:**
`has body - {email, password}, no parameter`
endpoint `GET - /api/user/login`
response `json with user token`
```json
{
    "success": Boolean,
    "token": String,
}
```