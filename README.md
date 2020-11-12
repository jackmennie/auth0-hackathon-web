# Hand off prototype

This is a prototyping tool to test the hand off nonce functionality of single sign on.

This will be behaviour expected from the mobile app when requesting a session for another app such as online services from the mobile app.

All the ins' and outs are explained in the member auth gateway readme. But this has a quick overview.

## Testing SSO without a nonce

- Simply log into any app but this (e.g. id-prototype) and then run this app locally, click login and if you have done all that within a minute, you will be logged in
- Wait more than a minute, and you will be redirected back to the log in page (which is already where you are). Clicking the login button again, will initiate a new login process

## Testing SSO with a nonce

- Login to any app (use id-prototype for simplicity). Grab the access token and then head over to the `member-auth-gateway` postman collection.
- Using `express/Nonce (GET)`, insert the copied access token as the bear token, then hit SEND
- Copy the returned nonce into the handoff nonce textbox (of this app)
- You will be able to sign in succesffully (for up to 100 days!)

## Notes

- In a real application of this, the hand off nonce will be passed to the calling app through a query param from the mobile app. E.g. OS-Web will pick up the query param, and then like this prototype tool, will call the login process by passing in that provided nonce.

### Bit more technical notes

- By default this prototype tool points to the KAOS nib tenant. You can change this by going to the `index.tsx` and provide the necessary values as indicated in the comments.
- Login.tsx has the functionality to call the universal login with the nonce
