# Idempotency

Resending the request without affecting backend state.

## API/postcomment
User sends a request to write comment. If connection is lost and user does not know whether the request was sent or not, he can resend the request. The backend should not create the same comment twice.

Easiest implementation is to use a **unique id** for each comment

In HTTP
- Get is idempotent
- Post is not idempotent but we can make it
- Browsers and proxies treat GET as idempotent