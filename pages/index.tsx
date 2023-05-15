import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import { useState, useRef, useEffect } from "react";
import Head from "next/head";

Chart.register(...registerables);

type ChartDataPoint = number | number[] | null | undefined | Chart.ChartPoint[];
type ChartDataLabel = string | number | string[] | number[] | Date | Date[] | moment.Moment | moment.Moment[];

// Chart data type
type ChartData = {
  labels: ChartDataLabel[];
  datasets: {
    label: string;
    data: ChartDataPoint[];
    backgroundColor: string[];
    barPercentage: number;
    categoryPercentage: number;
  }[];
};

// Initial state value
const initialData: ChartData | null | undefined = null;

// Frequency type
type frequency = {
  [key: string]: number;
};

function App() {
  const [data, setData] = useState<ChartData | null | undefined>(initialData); // chart data state
  const [loading, setLoading] = useState<boolean>(false); // loading state for button
  const buttonRef = useRef<HTMLButtonElement | null>(null); // ref for button to focus on load and on refresh click (for accessibility)

  // Focus on button on load for accessibility
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);

  // Handle submit method to fetch data and update state
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://www.terriblytinytales.com/test.txt"
      );
      const text = await response.text(); // get text content
      const words = text.split(/\s+/); // split text into words
      const frequency: frequency = {};
      for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase().replace(/[.,!?;:()"'-]/g, ""); // remove punctuation and convert to lowercase for case-insensitive comparison
        if (word) {
          frequency[word] = (frequency[word] || 0) + 1; // increment frequency of word if it exists, else set it to 1
        }
      }
      const sorted = Object.entries(frequency).sort((a, b) => b[1] - a[1]); // sort words by frequency in descending order
      const top20 = sorted.slice(0, 20); // get top 20 words
      const labels = top20.map((pair) => pair[0]); // get labels for x-axis
      const values = top20.map((pair) => pair[1]); // get values for y-axis

      // generate random colors for bars in chart (for fun)
      const colors = top20.map(() =>
        `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, 0.5)`
      );

      // update state with new data
      setData({
        labels,
        datasets: [
          {
            label: "Word Frequency",
            data: values,
            backgroundColor: colors,
            barPercentage: 1,
            categoryPercentage: 1,
          },
        ],
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Word Frequency Histogram</title>
        <meta name="description" content="Word Frequency Histogram" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`h-screen flex flex-col items-center justify-center mb-8 px-2 md:px-40`}>
        <h1 className="text-4xl font-bold text-center">Word Frequency Histogram</h1>
        <button
          ref={buttonRef}
          className={`${loading ? "bg-gray-400" : data ? "bg-red-500" : "bg-blue-500"
            } text-white px-4 py-2 rounded mt-8 block mx-auto focus:outline-none`}
          onClick={handleSubmit}
          disabled={loading}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          aria-label={loading ? "Loading..." : data ? "Refresh" : "Get Data"}
        >
          {loading ? "Loading..." : data ? "Refresh" : "Get Data"}
        </button>
        {data && (
          <div className="flex-grow w-full" aria-label="Histogram Chart">
            <Bar
              data={data}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  title: {
                    display: true,
                    text: 'Word Frequency',
                    font: {
                      size: 20,
                      weight: 'bold'
                    }
                  }
                },
                scales: {
                  x: {
                    type: "category",
                    title: {
                      display: true,
                      text: 'Word',
                      font: {
                        size: 16,
                        weight: 'bold'
                      }
                    },
                    ticks: {
                      font: {
                        size: 12
                      }
                    }
                  },
                  y: {
                    title: {
                      display: true,
                      text: 'Frequency',
                      font: {
                        size: 16,
                        weight: 'bold'
                      }
                    },
                    ticks: {
                      font: {
                        size: 12
                      },
                      precision: 0
                    }
                  }
                }
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
