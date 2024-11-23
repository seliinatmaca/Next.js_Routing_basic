// { belgeId: '1' }
// { slug: [ 'belge-1', 'sayfa-10' ] }

const Page = ({ params }) => {
  // eğer urlde 2 parametre varsa ikisinde sayfa ikisinde ekrana bas
  if (params.slug.length >= 2) {
    return (
      <h1 className="text-center">
        {params.slug[0]} deki {params.slug[1]} görüntüleniyor
      </h1>
    );
  }

  // urlde tek parametre varsa sadece onu göster
  return <div>{params.slug[0]} görüntüleniyor</div>;
};

export default Page;
