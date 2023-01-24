<script>
  import TagPriority from "./TagPriority.svelte";
  import CommentIcon from "../assets/commentIcon.svg";
  import AtachmentIcon from "../assets/attachment.svg";

  export let title = "Shopping cart and product catalog wireframes.";
  export let description = "Card Description";
  export let comments = 1;
  export let attachments = 3;
  export let avatarsrc = "images/avatar_1.jpg";
  export let priority = "high";
</script>

<div class="card">
  <TagPriority {priority} />
  <h2>{title}</h2>
  <p>{description}</p>
  <!-- Component icons below -->
  <div class="infoIcons-wrapper">
    <div class="icons-container">
      <div class="infoIcons">
        <img src={CommentIcon} alt="comments" />
        <span>{comments}</span>
      </div>
      <div class="infoIcons">
        <img src={AtachmentIcon} alt="adjuntos" />
        <span>{attachments}</span>
      </div>
    </div>
    <div class="avatar">
      <img src={avatarsrc} alt="avatar" />
    </div>
  </div>
</div>

<style lang="scss">
  .icons-container {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .avatar {
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: $slatan-200;
  }
  .card {
    background-color: $bgCardColor;
    border-radius: 1rem;
    max-width: 400px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    h2 {
      font-size: 1.5rem;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 0.5rem;
    }
  }
  .infoIcons {
    color: $slatan-200;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    img {
      width: 20px;
      height: 20px;
    }
    &-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    span {
      font-weight: 400;
      color: inherit;
      line-height: normal;
    }
  }
</style>
