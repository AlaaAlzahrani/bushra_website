
import React from "react";
import Image from "next/image";
import Link from "next/link";

const publication = {
  title: "The Impact of Teacher Accent on English Language Teaching Skills",
  description: "This peer-reviewed article explores the relationship between English language teachers' accents and their perceived English language teaching skills. Published in the Journal of International Social Science and Humanities, this study provides insights into how accent influences teaching effectiveness and student perceptions.",
  image: "/image/paper1.jpg",
  link: "https://journal.unhas.ac.id/index.php/jish/article/view/14960",
};

export function Publications() {
  return (
    <section className="py-16 px-8 bg-gray-50">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-gray-900 mb-4">
          Publication
        </h2>
        <p className="text-center text-gray-600 mb-12">
          My research work in the field of Education and Language Teaching
        </p>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src={publication.image}
            alt={publication.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-bold text-blue-gray-900 mb-4">{publication.title}</h3>
            <p className="text-gray-600 mb-6">{publication.description}</p>
            <Link href={publication.link} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              Read Publication
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Publications;