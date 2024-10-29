import { InputHTMLAttributes, useState } from "react";
import Heading from "../../Heading";
import { MAX_CHARACTER_COUNT } from "../../../lib/constants";
import clsx from "clsx";

export default function Contact() {
  const [message, setMessage] = useState("");
  const count = message.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const nextMessage = event.currentTarget.value;
    if (nextMessage.length <= MAX_CHARACTER_COUNT) {
      setMessage(event.currentTarget.value);
    } else {
      setMessage(message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Heading>Contact</Heading>
      <section className="my-6">
        <p className="w-full text-xl leading-relaxed tracking-wide text-white font-thin p-6">
          If you feel like I'd be a good fit for your team, let's chat! Feel
          free to reach out to me via LinkedIn or send me an email.
        </p>
        <form action="submit" className="grid grid-rows-2 gap-x-8 mt-10">
          <fieldset className="flex gap-x-8">
            <div className="flex flex-col gap-y-8">
              <InputField
                fieldName="name"
                type="text"
                required
                placeholder="e.g. Bob Ross"
              />
              <InputField
                fieldName="email"
                type="email"
                required
                placeholder="example@abc.com"
              />
              <InputField
                fieldName="Place you want to travel to"
                type="text"
                placeholder="e.g. The Moon"
              />
              {/* implement honey pot */}
            </div>
            <div className="relative flex flex-col h-full w-full gap-2">
              <label
                htmlFor="message"
                className="text-white text-xl font-light tracking-wide leading-relaxed"
              >
                Message
              </label>
              <textarea
                value={message}
                onChange={handleChange}
                name="message"
                id="message"
                required
                className="px-4 py-4 min-h-72 max-h-72 w-full placeholder:text-indigo-200 placeholder:italic text-white ring-sky-500 focus:ring-2 focus:bg-white/10 bg-indigo-300/10 rounded-md outline-none caret-indigo-300 caret transition"
              />
              <p
                className={clsx("relative text-white text-right", {
                  "text-red-600": count >= MAX_CHARACTER_COUNT,
                })}
              >
                <span className="font-semibold">{count}</span>/
                {MAX_CHARACTER_COUNT}
              </p>
            </div>
          </fieldset>
          <button
            type="submit"
            className="row-start-2 self-start justify-self-end button"
          >
            Send E-mail
          </button>
        </form>
      </section>
    </div>
  );
}

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  fieldName: string;
};

function InputField({ fieldName, ...rest }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={fieldName}
        className="text-white text-xl font-light tracking-wide leading-relaxed"
      >
        {fieldName[0].toUpperCase() + fieldName.slice(1)}
      </label>
      <input
        {...rest}
        name={fieldName}
        id={fieldName}
        className="py-1 px-4 placeholder:text-indigo-200 placeholder:italic text-white w-[400px] h-12 ring-sky-500 focus:ring-2 focus:bg-white/10 bg-indigo-300/10 rounded-md outline-none caret-indigo-300 caret transition"
      />
    </div>
  );
}
