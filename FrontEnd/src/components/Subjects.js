import Subject from './Subject';

const Subjects = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 text-center justify-items-center text-dark-blue text-xl pt-6 pb-6 ">
        <div className="text-2xl font-bold px-16 py-2 underline underline-offset-8">
          Ścisłe
        </div>
        <div className="text-2xl font-bold  px-16 py-2 underline underline-offset-8">
          Artystyczne
        </div>
        <div className="text-2xl font-bold  px-16 py-2 underline underline-offset-8">
          Humanistyczne
        </div>
        <div className="text-2xl font-bold px-16 py-2 underline underline-offset-8">
          Języki obce
        </div>
        <Subject name="Matematyka"/>
        <Subject name="Polski"/>
        <Subject name="Muzyka"/>
        <Subject name="Angielski"/>
        <Subject name="Biologia"/>
        <Subject name="Historia"/>
        <Subject name="Plastyka"/>
        <Subject name="Niemiecki"/>
        <Subject name="Chemia"/>
        <Subject name="WOS"/>
        <Subject name="Fotografia"/>
        <Subject name="Włoski"/>
        <Subject name="Fizyka"/>
        <Subject name="WOK"/>
        <Subject name="Aktorstwo"/>
        <Subject name="Hiszpański"/>
        <Subject name="Informatyka"/>
        <Subject name="Etyka"/>
        <Subject name="Emisja głosu"/>
        <Subject name="Francuski"/>
      </div>
      <div>
        <p className="flex justify-center font-semibold text-2xl underline mt-8  mb-8 text-dark-blue  underline-offset-1">
          Wszystkie kategorie
        </p>
      </div>
    </div>
  );
};

export default Subjects;