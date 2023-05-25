import {
  ActionFunctionArgs,
  Form,
  redirect,
  useActionData,
} from "react-router-dom";

export default function Contact() {
  const data: any = useActionData();

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="POST" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
}

export const contactAction = async ({ request }: ActionFunctionArgs) => {
  const data = await request.formData();

  const info = {
    email: data.get("email"),
    message: data.get("message") ?? "",
  };

  // should post info to the server
  console.log(info);

  if (info.message.toString().length < 10) {
    return { error: "Message must be over 10 chars long." };
  }

  return redirect("/");
};
