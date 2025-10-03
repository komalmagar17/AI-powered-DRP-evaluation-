# Prahari: AI-Powered DPR Evaluation Platform 🛡️

**Prahari** (meaning *Sentinel* or *Guardian*) is an intelligent platform designed to automate and enhance the evaluation of Detailed Project Reports (DPRs) for the Ministry of Development of North Eastern Region (MDoNER). It leverages AI, Natural Language Processing (NLP), and data analytics to ensure projects are complete, feasible, compliant, and low-risk.

![GitHub last commit](https://img.shields.io/github/last-commit/google/gemini-generative-ai)
![GitHub stars](https://img.shields.io/github/stars/google/gemini-generative-ai)
![License](https://img.shields.io/badge/license-MIT-blue.svg)



## Overview

Evaluating DPRs manually is a time-consuming, resource-intensive process prone to human error. Prahari streamlines this by ingesting DPRs in PDF or text format and performing a comprehensive, multi-dimensional analysis in minutes. This empowers MDoNER officials to make faster, more informed decisions, ensuring the successful implementation of development projects in the North Eastern Region.

***

## ✨ Key Features

* **🤖 AI-Powered Evaluation:** The platform automatically ingests and parses DPRs to assess them against key criteria:
    * **Completeness Check:** Verifies if all required sections and data points are present as per MDoNER guidelines.
    * **Technical Feasibility:** Analyzes project methodologies, resource allocation, and technical specifications for viability.
    * **Guideline Compliance:** Cross-references the DPR content with the latest MDoNER circulars and guidelines.

* **🔍 Inconsistency Detection:** Using advanced NLP, Prahari reads and understands the context of the DPR to flag discrepancies that are often missed, such as:
    * Mismatched budget figures between the summary and detailed sections.
    * Unrealistic timelines that don't align with the proposed work breakdown structure.
    * Contradictory statements across different chapters of the report.

* **📈 Predictive Risk Modeling:** The platform employs machine learning models to identify potential project risks early on. It flags issues like:
    * High probability of adverse **environmental impact** based on project location and scope.
    * Potential for **resource shortages** (e.g., raw materials, skilled labor) by analyzing project requirements against regional data.
    * Likelihood of **cost overruns** or **delays** based on historical project data.

* **🖥️ User-Friendly Dashboard:** A clean, intuitive interface designed for non-technical officials.
    * Visual summaries, charts, and clear risk indicators (e.g., red, amber, green flags).
    * **Multilingual Support:** Fully accessible in English, Hindi, Assamese, and other regional languages.

* **🌐 Offline Functionality:** Designed as a Progressive Web App (PWA), Prahari works seamlessly in areas with poor or no internet connectivity. Users can upload and perform initial analysis offline, with data syncing automatically once a connection is restored.

* **🔗 Seamless Integration:** Prahari is built with robust APIs to integrate smoothly with MDoNER's existing project management and financial systems, ensuring a unified workflow.

***

## 🛠️ Technology Stack

* **Backend:** Python (Flask), spaCy, Transformers, Scikit-learn, PyTorch
* **Frontend:** React.js / Vue.js
* **Database:** PostgreSQL
* **PDF Processing:** PyMuPDF, Tesseract OCR
* **Offline Storage:** IndexedDB, Service Workers
* **Deployment:** Docker, Kubernetes

***

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

* Python 3.9+
* Node.js v16+
* PostgreSQL

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/prahari.git](https://github.com/your-username/prahari.git)
    cd prahari
    ```

2.  **Install backend dependencies:**
    ```sh
    pip install -r requirements.txt
    ```

3.  **Install frontend dependencies:**
    ```sh
    cd frontend
    npm install
    ```

4.  **Configure environment variables:**
    Create a `.env` file in the root directory and add your database credentials and other configuration keys.
    ```env
    DATABASE_URL="postgresql://user:password@localhost/prahari_db"
    SECRET_KEY="your_secret_key"
    ```

5.  **Run the application:**
    * **Backend:**
        ```sh
        python app.py
        ```
    * **Frontend:**
        ```sh
        npm start
        ```

***

##  License

This project is licensed under the MIT License. See the `LICENSE` file for more details.