import styled from "styled-components";

const Wrapper = styled.article`
.card-container{
  position: relative;
  overflow: hidden;
  background: var(--grey-100);
  border-radius: var(--borderRadius);
  transition: var(--transition);
  /* min-height: 450px; */
}

.card-img{
transform: scale(.95);
transform-origin: bottom center;
transition: var(--transition);
}

.card-info{
  position: absolute;
  bottom: 0;
  transform: translatey(102%);
  background: var(--primary-500);
  padding: 1rem;
  display: grid;
  gap: 1rem;
  color: var(--white);
  line-height: 1.5;
  transition: var(--transition);
}

.divider-line{
  background-color: var(--white);
  width: 30% !important;
  margin-bottom: 0;
}

h5{
  line-height: 1.5;
}

h5 span{
  display: block;
  font-size: .8rem;
}

/* hovering */
.hovering{
  background: var(--primary-100)
}
.hovering .card-img{
  transform: scale(1);
}
.hovering .card-info{
  transform: translateY(0);
}

`

export default Wrapper