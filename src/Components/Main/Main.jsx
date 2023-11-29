/* eslint-disable react/prop-types */

import Card from './Card/Card';
const Main = ({articles}) => {


    return (
       <>
       <h2>Todays breaking news:{articles.length}</h2>
       {
         articles.map(article => <Card key title={article.title} description = {article.description} 
         content={article.content}></Card>)
       }
       
       
       </>
    );
};

export default Main;