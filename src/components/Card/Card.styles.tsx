import styled from "styled-components";

export const StyledCard = styled.article.attrs({
  className: "StyledCard",
})`
  figure {
    
    .post-image {
      height: 12rem;
      transition: all 0.15s cubic-bezier(.4,0,.2,1);
      border-radius: 0.75rem;
      object-fit: cover;
      width: 100%;
      box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
    
      &:hover {
        filter: grayscale(50%);
      }
    }
  }

  .content {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  figcaption {
    font-size: 0.6rem;
    color: #6B7280;
  }
  

  .avatar {
    width: 3rem;
    height: 3rem;
    margin-top: 0.5rem;
    border-radius: 9999px;
    object-fit: cover;
  }

  .card-content {
    width: calc(100% - 75px);
  }

  a {
    text-decoration: none;
  }

  h3 {
    color: black;
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .description {
    font-size: 0.875rem;
    line-height: 1.625;
    color: #6B7280;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .card-footer {
    padding-top: 1rem;
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`