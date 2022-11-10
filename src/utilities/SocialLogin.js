
export const handleGoogleSignin = (signInWithGoogle, location, naviget, from) => {
    signInWithGoogle()
        .then(result => {
            const user = result.user;
            const currentUser = {
                email: user.email
            }
            fetch('https://tasty-kitchen-server.vercel.app/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)

            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('token', data.token);
                    naviget(from, { replace: true });
                })
                .catch(err => console.error(err))
        })
        .catch(err => console.log(err))

}