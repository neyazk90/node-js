exports.get404Page = (req,res,next) => {
    res.status(404).send('page Not Found');
}