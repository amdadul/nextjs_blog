import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - My Blog</title>
        <meta name="description" content="Learn more about us and our mission." />
      </Head>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-800 text-center">About Us</h1>
          <p className="mt-6 text-lg text-gray-600 text-center">
            Welcome to My Blog! We are dedicated to sharing insightful and interesting content on a variety of topics.
            Our goal is to inspire, inform, and entertain our readers with stories, ideas, and useful resources.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
              <p className="mt-4 text-gray-600">
                Our mission is to create content that resonates with our audience and provides real value in their day-to-day lives.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800">Our Team</h2>
              <p className="mt-4 text-gray-600">
                We are a team of passionate writers, developers, and creators who love what we do. We bring fresh perspectives to every article.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
