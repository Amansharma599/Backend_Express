const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    }
});


//post middleware
fileSchema.post("save", async function(doc) {
    try{
        console.log("DOC",doc)

        //transporter 
        //TODO: shift this configuration under /config folder
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        //send mail 
        let info = await transporter.sendMail({
            from:`AmanSharma@infoTech`,
            to: doc.email,
            subject: "Testing Mail by Aman Sharma",
            html:`<h2>Thanks for mailing, I am thrilled to say that your document has been restored <br/>
             Here is Your Images</h2> <p>File Uploaded View here: <a href="${doc.imageUrl}">${doc.imageUrl}</a> </p>`,
        })
        
        console.log("INFO", info);


    }
    catch(error) {
        console.error(error);
    }
})


const File = mongoose.model("File", fileSchema);
module.exports = File;