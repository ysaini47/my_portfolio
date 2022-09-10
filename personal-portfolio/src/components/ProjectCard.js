import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,Url}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={Url} target="_blank" className="proj-card">
      <div className="proj-imgbx">
        <img src={imgUrl}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
