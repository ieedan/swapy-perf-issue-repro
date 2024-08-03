/** Just placeholder random data I made Claude make for me (not my own shit code) */

export type Data = {
    id: number;
    name: string;
    country?: string;
    state?: string;
    city?: string;
    dueAt: Date;
    createdAt: Date;
    title: string;
    tasks: Task[];
    priority: "High" | "Med" | "Low";
};

export type Task = {
    id: number;
    name: string;
    completed: boolean;
}

export const generateRandomDate = (start: Date, end: Date) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

export const generateRandomTask = (id: number): Task => ({
    id,
    name: `Task ${id}`,
    completed: Math.random() > 0.5
});

export const data: Data[] = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
    country: Math.random() > 0.7 ? ['USA', 'Canada', 'UK', 'Germany', 'France'][Math.floor(Math.random() * 5)] : undefined,
    state: Math.random() > 0.6 ? ['California', 'New York', 'Texas', 'Florida', 'Illinois'][Math.floor(Math.random() * 5)] : undefined,
    city: Math.random() > 0.5 ? ['Los Angeles', 'New York City', 'Chicago', 'Houston', 'Phoenix'][Math.floor(Math.random() * 5)] : undefined,
    dueAt: generateRandomDate(new Date(), new Date(2025, 11, 31)),
    createdAt: generateRandomDate(new Date(2020, 0, 1), new Date()),
    title: `Title for Item ${index + 1}`,
    tasks: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, (_, taskIndex) => generateRandomTask(taskIndex + 1)),
    priority: ['High', 'Med', 'Low'][Math.floor(Math.random() * 3)] as "High" | "Med" | "Low"
}));