// src/pages/Contact.jsx
import { useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaClock, FaCheck } from 'react-icons/fa6';
import { supabase } from '../lib/supabaseClient';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function validate() {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please tell me a bit about your project.';
    return newErrors;
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    if (status === 'submitting') return;
    setStatus('submitting');
    try {
      const { error } = await supabase.from('project_inquiries').insert({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });
      if (!error) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }
  const inputClass =
    'w-full mt-2 px-4 py-3 rounded-xl border border-ink/15 outline-none focus:border-gold text-sm bg-paper';

  return (
    <>
      <section className="pt-32 pb-14 sm:pt-40 sm:pb-16 grid-texture">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 text-center max-w-3xl mx-auto">
          <p className="eyebrow text-gold">Contact me</p>
          <h1 className="font-display font-bold text-4xl sm:text-6xl mt-4 leading-[1.08]">
            Let's build something amazing together.
          </h1>
          <p className="text-slate2 text-base sm:text-lg leading-relaxed mt-6">
            Have an idea, business project or website in mind? Tell me about it below.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <a
            href="https://wa.me/2347040181204?text=Hi%20OlaTech%2C%20I%27d%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener"
            className="chrome p-7 block relative"
          >
            <span className="pill absolute top-5 right-5 !bg-teal/15 !text-teal">Fastest reply</span>
            <div className="w-11 h-11 rounded-xl bg-teal/15 flex items-center justify-center">
              <FaWhatsapp className="text-teal" />
            </div>
            <h3 className="font-semibold mt-5">WhatsApp</h3>
            <p className="text-slate2 text-sm mt-2">+234 704 018 1204</p>
          </a>
          <div className="chrome p-7">
            <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center">
              <FaEnvelope className="text-gold" />
            </div>
            <h3 className="font-semibold mt-5">Email</h3>
            <a
              href="mailto:olatechdevelop@gmail.com"
              className="text-slate2 text-sm mt-2 block break-all hover:text-gold"
            >
              olatechdevelop@gmail.com
            </a>
          </div>
          <div className="chrome p-7 sm:col-span-2 lg:col-span-1">
            <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center">
              <FaClock className="text-gold" />
            </div>
            <h3 className="font-semibold mt-5">Availability</h3>
            <p className="text-slate2 text-sm mt-2">
              Monday – Saturday
              <br />
              8:00 AM – 6:00 PM (WAT)
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white border-y border-ink/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow text-gold">Let's talk</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3">
              Tell me about your next project
            </h2>
            <p className="text-slate2 mt-5 leading-relaxed">
              Fill the form and share your idea — I'll reply within 24 hours with next steps and a
              rough estimate.
            </p>
            <div className="mt-9 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                  <FaCheck className="text-gold text-sm" />
                </div>
                <p className="font-medium text-sm">Clean, hand-written code</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal/15 flex items-center justify-center shrink-0">
                  <FaCheck className="text-teal text-sm" />
                </div>
                <p className="font-medium text-sm">Mobile-tested, responsive design</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                  <FaCheck className="text-gold text-sm" />
                </div>
                <p className="font-medium text-sm">Reply within 24 hours</p>
              </div>
            </div>
          </div>

          <div className="chrome">
            <div className="chrome-bar">
              <span className="chrome-dot bg-[#FF5F57]"></span>
              <span className="chrome-dot bg-[#FEBC2E]"></span>
              <span className="chrome-dot bg-[#28C840]"></span>
              <span className="chrome-bar-url">new-project.form</span>
            </div>

            {status === 'success' ? (
              <div className="p-6 sm:p-8 text-center">
                <p className="text-4xl">✅</p>
                <h3 className="font-display font-semibold text-lg mt-4">Message sent!</h3>
                <p className="text-slate2 text-sm mt-2">
                  Thanks for reaching out — I'll reply within 24 hours.
                </p>
                <button onClick={() => setStatus('idle')} className="btn btn-outline mt-6">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-medium text-sm" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="font-medium text-sm" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className={inputClass}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="font-medium text-sm" htmlFor="subject">
                    What do you need?
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select an option</option>
                    <option value="Business website">A business website</option>
                    <option value="Online store">An online store</option>
                    <option value="Landing page">A landing page</option>
                    <option value="Website redesign">Redesign my current website</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label className="font-medium text-sm" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project"
                    className={inputClass}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm mt-4">
                    Something went wrong sending your message. Please try again, or email me
                    directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-gold w-full mt-6 disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="chrome chrome-dark p-10 sm:p-16 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="eyebrow text-gold">Available for projects</p>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-4 leading-[1.1]">
                Ready to create something incredible?
              </h2>
              <p className="text-white/60 mt-5 leading-relaxed">
                Whether it's a business website, portfolio, landing page or online store — I can
                help bring it to life.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-2xl p-6 text-center">
                <p className="font-display font-bold text-3xl text-gold">24h</p>
                <p className="text-white/50 text-xs mt-2">Response time</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-center">
                <p className="font-display font-bold text-3xl text-teal">100%</p>
                <p className="text-white/50 text-xs mt-2">Commitment</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-center">
                <p className="font-display font-bold text-3xl text-gold">Fast</p>
                <p className="text-white/50 text-xs mt-2">Delivery</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-center">
                <p className="font-display font-bold text-3xl text-teal">Pro</p>
                <p className="text-white/50 text-xs mt-2">Quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
