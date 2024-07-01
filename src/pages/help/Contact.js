import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
    const data = useActionData(); 

    return ( 
        <div className="contact">
            <h2>Contact Us</h2>
            <Form method="post" action="/help/contact">
                <label>Your email:</label>
                <input 
                    type="email"
                    name="email"
                    required
                />
                <label>Your message:</label>
                <textarea 
                    name="message"
                    required
                />
                <button>Submit</button>

                {data && data.error && <p>{data.error}</p>}
            </Form>
        </div>
     );
}

export const contactAction = async ({request}) => {

    const data = await request.formData()

    const submission = {
        email: data.get("email"),
        message: data.get("message")
    }

    console.log(submission);

    //send post request
    if(submission.message.length < 10){
        console.log('Message must be over 10 chars long');
        return {error: 'Message must be over 10 chars long'}
    }

    //redirect the user
    return redirect("/")
}
 
export default Contact;