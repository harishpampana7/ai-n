import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from 'react-bootstrap';

const modules = [
    {
      title: "Module 1: Welcome to the Course",
      contents: [
        "Course Overview",
      ]
    },
    {
      title: "Module 2: Python",
      contents: [
        "Introduction Of Python And Comparison With Other Programming Language",
        "Python Objects, Number & Booleans, Strings.",
        "Container Objects, Mutability Of Objects",
        "Operators - Arithmetic, Bitwise, Comparison And Assignment Operators, Operator's Precedence And Associativity",
        "Conditions (If Else, If-Elif-Else), Loops (While, For)",
        "Break And Continue Statement And Range Function",
        "Basic Data Structure In Python",
        "String Object Basics",
        "String Inbuilt Methods",
        "Splitting And Joining Strings",
        "String Format Functions",
        "List Methods",
        "List As Stack And Queues",
        "List Comprehensions",
        "Tuples, Sets & Dictionary Object Methods",
        "Dictionary Comprehensions",
        "Dictionary View Objects",
        "Functions Basics, Parameter Passing, Iterators.",
        "Generator Functions",
        "Lambda Functions",
        "Map, Reduce, Filter Functions.",
        "Oops Basic Concepts.",
        "Creating Classes",
        "Pillars Of Oops",
        "Inheritance",
        "Polymorphism",
        "Encapsulation",
        "Abstraction",
        "Class Methods And Static Methods",
        "Working With Files",
        "Reading And Writing Files",
        "Other File Methods.",
        "Exceptions Handling With Try-Except",
      ]
    },
    {
      title: "Module 3: API",
      contents: [
        "Flask API"
      ]
    },
    {
      title: "Module 4: Pandas",
      contents: [
        "Python Pandas - Series",
        "Python Pandas – Data Frame",
        "Python Pandas – Panel",
        "Python Pandas - Basic Functionality",
        "Reading Data From Different File System",
        "Python Pandas – Re Indexing",
        "Python Pandas – Iteration",
        "Python Pandas – Sorting",
        "Working With Text Data Options & Customization",
        "Indexing & Selecting",
        "Data Statistical Functions",
        "Python Pandas - Window Functions",
        "Python Pandas - Date Functionality",
        "Python Pandas –Time Delta",
        "Python Pandas - Categorical Data",
        "Python Pandas – Visualization"
      ]
    },
    {
      title: "Module 5: Numpy",
      contents: [
        "Numpy - Nd Array Object.",
        "Numpy - Data Types.",
        "Numpy - Array Attributes.",
        "Numpy - Array Creation Routines.",
        "Numpy - Array From Existing.",
        "Data Array From Numerical Ranges.",
        "Numpy - Indexing & Slicing.",
        "Numpy – Advanced Indexing.",
        "Numpy – Broadcasting.",
        "Numpy - Iterating Over Array.",
        "Numpy - Array Manipulation.",
        "Numpy - Binary Operators.",
        "Numpy - String Functions.",
        "Numpy - Mathematical Functions.",
        "Numpy - Arithmetic Operations.",
        "Numpy - Statistical Functions.",
        "Sort, Search & Counting Functions.",
        "Numpy - Byte Swapping.",
        "Numpy - Copies & Views.",
        "Numpy - Matrix Library.",
        "Numpy - Linear Algebra"
      ]
    },
    {
      title: "Module 6: Visualization Libraries",
      contents: [
        "Matplotlib",
        "Seaborn",
        "Plotly"
      ]
    },
    {
      title: "Module 7: SQL",
      contents: [
        "SQL Queries",
        "SQL function and procedure",
        "SQL primary and foreign key",
        "Window Function",
        "Partition",
        "Joins ,Union , Indexing , CTE"
      ]
    },
    {
      title: "Module 8: No SQL - MongoDB",
      contents: [
        "MongoDB Get Started",
        "MongoDB Create Database",
        "MongoDB Create Collection",
        "MongoDB Insert",
        "MongoDB Find",
        "MongoDB Query",
        "MongoDB Sort",
        "MongoDB Delete",
        "MongoDB Drop Collection",
        "MongoDB Update",
        "MongoDB Limit"
      ]
    },
    {
      title: "Module 9: Statistics",
      contents: [
        "Introduction To Basic Statistics Terms",
        "Types Of Statistics",
        "Types Of Data",
        "Levels Of Measurement",
        "Measures Of Central Tendency",
        "Measures Of Dispersion",
        "Random Variables",
        "Set",
        "Skewness",
        "Covariance And Correlation",
        "Probability Density/Distribution Function",
        "Types Of The Probability Distribution",
        "Binomial Distribution",
        "Poisson Distribution",
        "Normal Distribution (Gaussian Distribution)",
        "Probability Density Function And Mass Function",
        "Cumulative Density Function",
        "Examples Of Normal Distribution",
        "Bernoulli Distribution",
        "Uniform Distribution",
        "Z Stats",
        "Central Limit Theorem",
        "Estimation",
        "A Hypothesis"
      ]
    },
    {
      title: "Module 10: Advanced Statistics",
      contents: [
        "Hypothesis Testing’s Mechanism",
        "P-Value",
        "T-Stats",
        "Student T Distribution",
        "T-Stats Vs. Z-Stats: Overview",
        "When To Use A T-Tests Vs. Z-Tests",
        "Type 1 & Type 2 Error",
        "Bayes Statistics (Bayes Theorem)",
        "Confidence Interval (CI)",
        "Confidence Intervals And The Margin Of Error",
        "Interpreting Confidence Levels And Confidence Intervals",
        "Chi-Square Test",
        "Chi-Square Distribution Using Python",
        "Chi-Square For Goodness Of Fit Test"
      ]
    },
    {
      title: "Module 11: Feature Engineering",
      contents: [
        "Handling Missing Data",
        "Handling Imbalanced Data",
        "Handling Outliers",
        "Feature Scaling",
        "Data Encoding",
        "Backward Elimination",
        "Forward Elimination",
        "Recursive Feature Elimination",
        "Covariance And Correlation",
        "Vif"
      ]
    },
    {
      title: "Module 12: Machine Learning",
      contents: [
        "AI Vs ML Vs DL Vs DS",
        "Types Of ML Techniques",
        "Supervised vs Unsupervised and Semi-Supervised and Reinforcement Learning"
      ]
    },
    {
      title: "Module 13: Supervised Machine Learning",
      contents: [
        "Simple Linear Regression with implementation",
        "Multiple Linear Regression with implementation",
        "MSE, MAE, RMSE",
        "Performance Metrics - R-square and Adjusted R-squared",
        "Linear Regression With OLS with implementation",
        "Polynomial Regression with implementation",
        "Ridge, Lasso, Elasticnet with implementation",
        "Logistic Regression with implementation",
        "Performance Metrics - Confusion Matrix, Accuracy, Precision, Recall, F Beta Score, ROC-AUC Curve",
        "Logistic Regression OVR",
        "Support Vector Machines Classifiers with implementation",
        "Support Vector Machines Regressor with implementation",
        "Support Vector Kernels with implementation",
        "Bayes Theorem And Naive Bayes Classifier with implementation",
        "Knn Classifier with implementation",
        "Knn Regressor with implementation",
        "Brute Force Knn, K-Dimension Tree, Ball Tree",
        "Decision Tree Classifier with implementation",
        "Decision Tree Classifier with implementation",
        "Bagging And Boosting with implementation",
        "Random Forest Classifier with implementation",
        "Random Forest Regressor with implementation",
        "Out Of Bag Evaluation",
        "Adaboost Classifier with implementation",
        "Adaboost Regressor with implementation",
        "Gradient Boost Classifier with implementation",
        "Gradient Boost Regression with implementation",
        "Xgboost Classifier with implementation",
        "Xgboost Regressor with implementation"
      ]
    },
    {
      title: "Module 14: Unsupervised ML",
      contents: [
        "Introduction To Unsupervised ML",
        "KMeans Clustering",
        "Hierarchical Clustering",
        "DBScan Clustering",
        "Silhouette Coefficient"
      ]
    },
    {
      title: "Module 15: Deep Learning",
      contents: [
        "Introduction",
        "Why Deep Learning Is Becoming Popular",
        "Perceptron Intuition",
        "Artificial Neural Network Working",
        "Back Propagation In ANN",
        "Chain Rule Of Derivatives",
        "Vanishing Gradient Problem",
        "Exploding Gradient Problem",
        "Different Activation Functions",
        "Different types of Loss Function",
        "Different types Of Optimizers",
        "Weight Initialization Techniques",
        "Drop Out Layer",
        "Batch Normalization",
        "Visualization Of Neural Network",
        "Colab Pro Setup",
        "TensorFlow Installation 2.0",
        "TensorFlow 2.0 Neural Network Creation",
        "Netron",
        "Pytorch Installation",
        "Pytorch Neural Network Creation"
      ]
    },
    {
      title: "Module 17: End To End ML Projects",
      contents: [
        "Developing a Comprehensive Image Scraper with Python",
        "Machine Learning-Based Fault Prediction for Industrial Sensors End To End Project",
        "Developing an Advanced Review Scraper with Python and Data Visualization",
        "ShipSage: Machine Learning for Smart Shipment Price Prediction",
        "Machine Learning-Based Resume Sorting Algorithm",
        "Advanced Machine Learning Model: Card Fraud Detection",
        "Efficient Data Handling in Machine Learning with Python",
        "Hotel Revenue Prediction Using Machine Learning"
      ]
    }
  ];
  


  
  const CourseAccordion = () => {
    return (
      <Container className="mt-5">
             <Typography variant="h5" align="left" gutterBottom>
        <span style={{ borderLeft: '4px solid #203864', paddingLeft: '8px' }}>Carefully Curated Curriculum
        </span>
      </Typography>
      <Box
        sx={{
          height: '500px', // Set the height of the parent container
          overflowY: 'auto', // Make it scrollable
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Add box shadow
          padding: 2,
          width:"80%",
          margin:"auto",
          marginTop:"30px",
          
        }}
      >
        {modules.map((module, index) => (
          <Accordion key={index} sx={{ marginBottom: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{module.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {module.contents.map((content, idx) => (
                  <li key={idx}>
                    <Typography>{content}</Typography>
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      </Container>
      
    );
  };
  
  

export default CourseAccordion;
