const validate = (values, schema) => {
    const { error } = schema.validate(values)
    if (error) {
        throw new Error(error)
    }
}
module.exports = validate
