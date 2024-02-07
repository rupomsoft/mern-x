class ValidationHelper{
    static IsEmail(value) {
        let EmailRegx = /\S+@\S+\.\S+/;
        return EmailRegx.test(value);
    }
    static IsNumber(value) {
        let  OnlyNumberRegx = /^\d+(\.\d+)?$/;
        return OnlyNumberRegx.test(value);
    }
    static IsNull(value) {
        return value == null;
    }
    static  IsEmpty(value) {
        return value.length === 0;
    }
    static IsValidDate(value) {
        let DATEregex = /^\d{4}-\d{2}-\d{2}$/;
        return DATEregex.test(value);
    }
}
export default ValidationHelper