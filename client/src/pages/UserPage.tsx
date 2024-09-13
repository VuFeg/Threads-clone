import { UserHeader } from "../components/user/UserHeader";
import { UserPost } from "../components/user/UserPost";
import post1 from "../assets/images/post1.png";
import post2 from "../assets/images/post2.png";
import post3 from "../assets/images/post3.png";

export const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={1200}
        replies={481}
        postImg={post1}
        postTitle="Let's talk about threads."
      />
      <UserPost
        likes={464}
        replies={234}
        postImg={post2}
        postTitle="I love guy."
      />
      <UserPost
        likes={624}
        replies={123}
        postImg={post3}
        postTitle="I like it."
      />
      <UserPost
        likes={123}
        replies={12}
        postImg={null}
        postTitle="This is my first post."
      />
    </>
  );
};
