

const jobs = [
  {
    title: "Medical Officer",
    type: "Full Time",
    qualification: "MBBS",
    experience: "2+ Years",
    icon: "🩺",
  },
  {
    title: "Staff Nurse",
    type: "Full Time",
    qualification: "GNM / B.Sc Nursing",
    experience: "1+ Years",
    icon: "👩‍⚕️",
  },
  {
    title: "Telecalling Executive",
    type: "Full Time",
    qualification: "Graduate",
    experience: "0-2 Years",
    icon: "📞",
  },
  {
    title: "Yoga Trainer",
    type: "Part Time",
    qualification: "Certified Trainer",
    experience: "1+ Years",
    icon: "🧘",
  },
  {
    title: "Community Health Worker",
    type: "Full Time",
    qualification: "Graduate",
    experience: "Preferred",
    icon: "❤️",
  },
  {
    title: "Health Counselor",
    type: "Full Time",
    qualification: "Graduate",
    experience: "1+ Years",
    icon: "💚",
  },
  {
    title: "Healthcare Intern",
    type: "Internship",
    qualification: "Students",
    experience: "Freshers Welcome",
    icon: "🎓",
  },
];

export default function CareerSections() {
  return (
    <>
      {/* HERO */}

      <section className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="bg-white/20 px-5 py-2 rounded-full text-sm font-semibold">
              Careers at Prakrati
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
              Build Your Career
              <br />
              In Healthcare
            </h1>

            <p className="mt-6 text-lg text-green-100 leading-8">
              Join our passionate healthcare and education team.
              Together we are creating healthier communities and
              transforming lives through quality care and education.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="#jobs"
                className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-green-100 transition"
              >
                Explore Careers
              </a>

              <a
                href="#apply"
                className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-700 transition"
              >
                Apply Now
              </a>

            </div>

          </div>

          <div className="flex justify-center">

            <img
              src="/career-hero.png"
              alt="Healthcare Team"
              className="max-w-lg w-full"
            />

          </div>

        </div>
      </section>

      {/* JOBS */}

      <section
        id="jobs"
        className="py-20 bg-slate-50"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-slate-800">
              Explore Career Opportunities
            </h2>

            <p className="text-slate-600 mt-4 text-lg">
              Become a part of our growing healthcare family.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {jobs.map((job, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8 border border-slate-100"
              >

                <div className="text-5xl">
                  {job.icon}
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {job.title}
                </h3>

                <div className="mt-5 space-y-3 text-slate-600">

                  <p>
                    <strong>Employment :</strong> {job.type}
                  </p>

                  <p>
                    <strong>Qualification :</strong> {job.qualification}
                  </p>

                  <p>
                    <strong>Experience :</strong> {job.experience}
                  </p>

                </div>

                <a
                  href="#apply"
                  className="block mt-8 text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
                >
                  Apply Now
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* RECRUITMENT PROCESS */}

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800">
              Recruitment Process
            </h2>

            <p className="text-slate-600 mt-4 text-lg">
              Our hiring process is simple, transparent and candidate friendly.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="text-center p-8 rounded-3xl shadow-lg border">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold">
                1
              </div>

              <h3 className="font-bold text-xl mt-6">
                Apply
              </h3>

              <p className="text-slate-600 mt-3">
                Submit your career application online.
              </p>
            </div>

            <div className="text-center p-8 rounded-3xl shadow-lg border">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold">
                2
              </div>

              <h3 className="font-bold text-xl mt-6">
                Screening
              </h3>

              <p className="text-slate-600 mt-3">
                Our HR team reviews every application carefully.
              </p>
            </div>

            <div className="text-center p-8 rounded-3xl shadow-lg border">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold">
                3
              </div>

              <h3 className="font-bold text-xl mt-6">
                Interview
              </h3>

              <p className="text-slate-600 mt-3">
                Shortlisted candidates are invited for an interview.
              </p>
            </div>

            <div className="text-center p-8 rounded-3xl shadow-lg border">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold">
                4
              </div>

              <h3 className="font-bold text-xl mt-6">
                Join Us
              </h3>

              <p className="text-slate-600 mt-3">
                Welcome to the Prakrati Healthcare & Education family.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-800">
              Frequently Asked Questions
            </h2>

            <p className="text-slate-600 mt-4">
              Find answers to common questions about our hiring process.
            </p>
          </div>

          <div className="space-y-6">

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-lg">
                Who can apply?
              </h3>

              <p className="text-slate-600 mt-2">
                Qualified professionals, fresh graduates and interns can apply
                depending on the position.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-lg">
                Is prior experience mandatory?
              </h3>

              <p className="text-slate-600 mt-2">
                Not for every role. Internship and fresher opportunities are
                also available.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-lg">
                How will I know my application status?
              </h3>

              <p className="text-slate-600 mt-2">
                Our HR team will contact shortlisted candidates through phone or
                email.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-lg">
                Can I apply for multiple positions?
              </h3>

              <p className="text-slate-600 mt-2">
                Yes. You can submit separate applications for different roles.
              </p>
            </div>

          </div>

        </div>
      </section>

    </>
  );
}
