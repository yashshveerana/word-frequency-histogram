# Word Frequency Histogram

This project is a Next.js application that fetches contents of a text file from [https://www.terriblytinytales.com/test.txt](https://www.terriblytinytales.com/test.txt), parses content to find frequency of occurrence of each word, and plots a histogram on frontend using Next.js and React Chart.js 2 library.

## Demo ✈️

A live demo of application can be found at [https://word-frequency-histogram-omega.vercel.app/](https://word-frequency-histogram-omega.vercel.app/).

## Screenshots

<img src="https://github.com/yashshveerana/word-frequency-histogram/assets/109012436/8a7cce9d-41ed-4e21-ad2e-e5a307ebfcf8" alt="image" width="700px" height="auto" />

<img src="https://github.com/yashshveerana/word-frequency-histogram/assets/109012436/1507ce97-8f01-4aaa-8979-2d81cac68ce4" alt="image" width="700px" height="auto" />

## Features

- On first load, application displays a **Get Data** button.
- Pressing **Enter** or clicking on **Get Data** button triggers a fetch request to retrieve text content from **https://www.terriblytinytales.com/test.txt**.
- text content is then parsed, and frequency of occurrence of **each word, regardless of case,** is calculated.
- Before counting frequency, any punctuation marks including ., ,, !, ?, ;, :, (, ), ", ', and - are **removed** from each word.
-  **Top 20** words with **highest occurrence frequency** are displayed in a ***histogram***.
- X-axis represents top 20 words, and Y-axis represents number of times each word occurred in file. histogram is generated using React Chart.js 2 library.

## Libraries and Plugins Used

- Next.js 🚀
- React ⚛️
- React Chart.js 2 📊

## Installation

1. Clone repository from GitHub:

    ```bash
    git clone https://github.com/yashshveerana/word-frequency-histogram.git
    ```

2. Navigate to project directory:

    ```bash
    cd word-frequency-histogram
    ```

3. Install dependencies:

    ```bash
    npm install

    # or

    yarn
    ```

## Usage

1. Run development server:

    ```bash
    npm run dev

    # or

    yarn dev
    ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
3. Click on **Get Data** button to fetch text content and generate histogram.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue on GitHub repository.

To contribute to this project, follow these steps:

1. Fork repository on GitHub.
2. Clone your forked repository to your local machine:

    ```bash
    git clone <fork-repo>
    ```

3. Create a new branch for your feature or bug fix:

    ```bash
    git checkout -b <branch-name>
    ```

4. Make your changes and commit them with descriptive commit messages:

    ```bash
    git commit -m "<commit-message>"
    ```

5. Push your changes to your forked repository:

    ```bash
    git push origin <branch-name>
    ```

6. Open a pull request on original repository and describe changes you made.
7. Wait for feedback and discussion on your pull request. Make any necessary changes based on feedback.
8. Once your pull request is approved, it will be merged into main repository.

## License

This project is licensed under [MIT License](https://github.com/yashshveerana/word-frequency-histogram/blob/master/LICENSE).

You are free to modify and use code in this project for personal or commercial purposes.
