import Footer from "@/components/Footer";
import TaskBoard from "@/components/TaskBoard";
import { seedTasks } from "@/lib/seed-tasks";

export default function Home() {
  return (
    <>
      <TaskBoard initialTasks={seedTasks} />
      <Footer />
    </>
  );
}
