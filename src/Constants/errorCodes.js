const ErrorCodes = {
    emailRequired:{
        error:"Email Id is Required"
    },
    passwordRequired:{
        error:"Password is Required"
    },
    loginSuccess:{
        message:'Login Successfull',
        code:'LOG-200'
    },
    userNotFound:{
        message:'User not found', 
        code:'LOG-300'
    },
    internalServerError:{
        message:'Internal Server Error',
        code:'INT-500'
    },
    nameIsRequired:{
        error:"Name is required"
    },
    userCreated:{
        message:"User Created Successfully",
        code:"CRE-201"
    },
    bookIdRequired:{
        message:"Book Id is Required"
    },
    bookAdded:{
        message:"Book Added Successfully",
        code:"CRE-201"
    },
    bookDetailsUpdated:{
        message:"Book Details Updated",
        code:"UP-201"
    },
    bookDeletedSuccessfully:{
        message:"Book Deleted Successfully",
        code:"DEL-201"
    }
}

export default ErrorCodes;