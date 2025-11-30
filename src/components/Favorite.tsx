interface Props {
  isLiked: boolean;
  onLiked(): void;
}

function Favorite({ isLiked, onLiked }: Props) {
  let classes = "clickable fa-heart fa-";

  classes += isLiked ? "solid" : "regular";

  return <i onClick={onLiked} className={classes}></i>;
}
export default Favorite;
