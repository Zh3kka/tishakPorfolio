"use client";
import { Minus } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const SectionContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Email sent successfully");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Error sending email");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error sending email");
    }
  };

  return (
    <section className="container mx-auto px-4">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-center mt-10 uppercase">
          Get in touch
        </h1>
        <Minus size={50} className="font-thin" />
        <a href="mailto:tishak@gmail.com&body=Hi, there">tishak@gmail.com</a>
      </div>
      <hr className="w-full my-10 border-black border-2" />
      <div className="max-w-4xl mx-auto pb-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-black p-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-black p-2"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-black p-2"
            required
          />
          <textarea
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-black p-2 h-32"
            required
          />
          <button type="submit" className="bg-black text-white p-2 w-full">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default SectionContact;
