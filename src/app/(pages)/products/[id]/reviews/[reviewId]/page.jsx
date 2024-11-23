const ReviewDetail = ({ params }) => {
  return (
    <div>
      <span className="text-red-500"> {params.id} 'li Ürünün </span>
      <br />
      <span className="text-green-500">{params.reviewId} id'li Yorumunun </span>
      <br />
      Detay Sayfası
    </div>
  );
};

export default ReviewDetail;
