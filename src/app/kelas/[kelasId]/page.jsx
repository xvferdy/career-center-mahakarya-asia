import React from "react";
import { notFound } from "next/navigation";

async function ClassPage(props) {
  // const kelas = await fetchData(props.params.kelasId);
  // if (!kelas.id) return notFound();

  return (
    <main className="kelas-main">
      {/* <h1>kelas {props.params.kelasId}</h1> */}
      {/* <h1>{kelas.name}</h1>
      <p>{kelas.desc}</p> */}
    </main>
  );
}

export default ClassPage;

// export async function generateStaticParams() {
//   const res = await fetch(`http://localhost:8000/kelas/`, {
//     next: { revalidate: 60 },
//   });
//   const data = await res.json();
//   const kelas = data.map((kelas, id) => ({
//     kelasId: kelas.id.toString(),
//   }));

//   return kelas;
// }

// const fetchData = async (kelasId) => {
//   const res = await fetch(`http://localhost:8000/kelas/${kelasId}`);
//   const data = await res.json();
//   return data;
// };
