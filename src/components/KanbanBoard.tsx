import { useState } from "react";

interface Task {
  id: string;
  title: string;
  description: string;
  badge?: string;
  badgeType?: "time" | "priority";
}

interface Column {
  id: string;
  title: string;
  icon: string;
  tasks: Task[];
}

const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>([
    {
      id: "todo",
      title: "To Do",
      icon: "📝",
      tasks: [
        {
          id: "task1",
          title: "Custom Domain Setup",
          description: "Configure bradley.academy/ai-toolkit with SSL certificate",
          badge: "15 min",
          badgeType: "time",
        },
        {
          id: "task2",
          title: "SEO Optimization",
          description: "Add meta tags, Open Graph images, and schema markup",
          badge: "30 min",
          badgeType: "time",
        },
        {
          id: "task3",
          title: "Analytics Integration",
          description: "Setup Google Analytics and track button clicks",
          badge: "20 min",
          badgeType: "time",
        },
        {
          id: "task4",
          title: "LinkedIn Launch Post",
          description: "Draft announcement with key insights and website link",
          badge: "High Priority",
          badgeType: "priority",
        },
      ],
    },
    {
      id: "in-progress",
      title: "In Progress",
      icon: "🔄",
      tasks: [
        {
          id: "task5",
          title: "Mobile Responsiveness",
          description: "Test and optimize layout for phones and tablets",
          badge: "45 min",
          badgeType: "time",
        },
        {
          id: "task6",
          title: "Content Proofreading",
          description: "Review all prompts and examples for accuracy",
          badge: "High Priority",
          badgeType: "priority",
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      icon: "✅",
      tasks: [
        {
          id: "task7",
          title: "Extract Core Concepts",
          description: "Condensed 163 pages into 6 key frameworks",
        },
        {
          id: "task8",
          title: "Create Website Outline",
          description: "Structured content with clear sections and CTAs",
        },
        {
          id: "task9",
          title: "Build Prototype",
          description: "Functional website with tabbed navigation",
        },
      ],
    },
  ]);

  const [draggedTask, setDraggedTask] = useState<{
    task: Task;
    fromColumn: string;
  } | null>(null);

  const handleDragStart = (task: Task, columnId: string) => {
    setDraggedTask({ task, fromColumn: columnId });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (toColumnId: string) => {
    if (!draggedTask) return;

    const newColumns = columns.map((col) => {
      if (col.id === draggedTask.fromColumn) {
        return {
          ...col,
          tasks: col.tasks.filter((t) => t.id !== draggedTask.task.id),
        };
      }
      if (col.id === toColumnId) {
        return {
          ...col,
          tasks: [...col.tasks, draggedTask.task],
        };
      }
      return col;
    });

    setColumns(newColumns);
    setDraggedTask(null);
  };

  const getColumnStyles = (columnId: string) => {
    switch (columnId) {
      case "todo":
        return {
          header: "text-muted-foreground border-border",
          card: "border-l-muted-foreground/50",
        };
      case "in-progress":
        return {
          header: "text-orange-500 border-orange-300",
          card: "border-l-orange-500",
        };
      case "done":
        return {
          header: "text-green-500 border-green-300",
          card: "border-l-green-500",
        };
      default:
        return { header: "", card: "" };
    }
  };

  return (
    <div className="mt-20 bg-background rounded-3xl p-10 shadow-2xl">
      <h2 className="text-4xl font-bold text-center text-primary mb-12">
        📋 Project Plan: Kanban Board
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {columns.map((column) => {
          const styles = getColumnStyles(column.id);
          return (
            <div
              key={column.id}
              className="bg-muted/30 rounded-xl p-6 min-h-[400px]"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(column.id)}
            >
              <div
                className={`text-xl font-bold mb-6 pb-4 border-b-4 flex items-center gap-3 ${styles.header}`}
              >
                <span className="text-2xl">{column.icon}</span>
                <span>{column.title}</span>
              </div>
              <div className="space-y-4">
                {column.tasks.map((task) => (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={() => handleDragStart(task, column.id)}
                    className={`bg-background p-4 rounded-lg shadow-md cursor-move transition-all hover:translate-x-1 hover:shadow-lg border-l-4 ${styles.card}`}
                  >
                    <div className="font-semibold text-foreground mb-2">
                      {task.title}
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      {task.description}
                    </div>
                    {task.badge && (
                      <span
                        className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold ${
                          task.badgeType === "time"
                            ? "bg-teal-50 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
                            : "bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                        }`}
                      >
                        {task.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KanbanBoard;
