const echo = (req, res) => {
    console.log('Received Echo');
    res.send('Recived Echo');
}

const healthcheck = (req, res) => {
    console.log('Received health check');
    res.send('Received Echo');
}

module.exports = {
    echo,
    healthcheck
}