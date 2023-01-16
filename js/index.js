window.addEventListener('load', () => {
    registerSw();
})

async function registerSw()
{
    if('serviceWorker' in navigator)
    {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log("Serivce Worker Registered!");
                console.log(registration);
        }).catch(error => {
                console.log("Serivce Worker Registration Failed!", error);
        })
    }
}
