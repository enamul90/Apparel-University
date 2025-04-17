import React from 'react';
import AppLayout from "../component/Layout/AppLayout.jsx";
import BlogDetails from "../component/Blog/Blog-Details.jsx";

const BlogDetailsPage = () => {
    return (
        <div>
            <AppLayout>
                <BlogDetails />
            </AppLayout>
        </div>
    );
};

export default BlogDetailsPage;