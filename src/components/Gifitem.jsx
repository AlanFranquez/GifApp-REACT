
export const Gifitem = ({title, url}) => {

    // console.log(img.title)
  return (
    <div className="card">
        <p>{title}</p>
        <img src={url} alt={title}></img>
    </div>
  )
}
