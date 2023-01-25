// import store from svelte
import { writable } from "svelte/store";
// dos objetos in progress y en review
export const status = {
  todo: "todo",
  inProgress: "inProgress",
  done: "done",
};

export const CARDS = writable([
  {
    id: 1,
    priority: "high",
    title: "Research and strategy for upcoming projects",
    description: "lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    comments: 1,
    attachments: 3,
    avatar: "/images/avatar_1.jpg",
    status: status.inProgress,
  },
  {
    id: 2,
    priority: "med",
    title: "Account profile flow diagrams",
    description: "consectetur adipisicing elit. Quisquam, quod lore ipsum dolor sit amet.",
    comments: 1,
    attachments: 2,
    avatar: "/images/avatar_2.jpg",
    status: status.inProgress,
  },
  {
    id: 3,
    priority: "low",
    title: "Slide template for client pitch project",
    description: "lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    comments: 3,
    attachments: 3,
    avatar: "/images/avatar_3.jpg",
    status: status.inProgress,
  },
  {
    id: 4,
    priority: "low",
    title: "Review administrator console designs.",
    description: "lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    comments: 2,
    attachments: 3,
    avatar: "/images/avatar_4.jpg",
    status: status.inProgress,
  },
  {
    id: 5,
    priority: "low",
    title: "Dashboard layout design.",
    description: "lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    comments: 1,
    attachments: 2,
    avatar: "/images/avatar_5.jpg",
    status: status.done,
  },
  {
    id: 6,
    priority: "high",
    title: "Social media posts.",
    description: "lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    comments: 3,
    attachments: 2,
    avatar: "/images/avatar_6.jpg",
    status: status.done,
  },
  {
    id: 7,
    priority: "low",
    title: "Shopping cart and product catalog wireframes.",
    description: "lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    comments: 1,
    attachments: 3,
    avatar: "/images/avatar_7.jpg",
    status: status.done,
  },
  {
    id: 8,
    priority: "med",
    title: "End user flow charts.",
    description: "lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    comments: 2,
    attachments: 2,
    avatar: "/images/avatar_8.jpg",
    status: status.done,
  },
  {
    id: 9,
    priority: "low",
    title: "User interface design.",
    description: "lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    comments: 1,
    attachments: 3,
    avatar: "/images/avatar_1.jpg",
    status: status.todo,
  },
  {
    id: 10,
    priority: "low",
    title: "User stories design.",
    description: "lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    comments: 1,
    attachments: 2,
    avatar: "/images/avatar_2.jpg",
    status: status.todo,
  },
]);
