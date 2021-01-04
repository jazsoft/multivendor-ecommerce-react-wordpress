import React from 'react';
import Link from 'next/link';
import moment from 'moment';

const WPPostGrid = ({ post }) => {
    let postThumbnailView, postAuthorView, postCategoriesView;

    if (post && post._embedded) {
        // thumbnail
        if (post._embedded['wp:featuredmedia']) {
            const thumbnail = post._embedded['wp:featuredmedia'].find(
                (item) => item.id === post.featured_media
            );

            postThumbnailView = (
                <img src={thumbnail.source_url} alt="martfury" />
            );
        } else {
            postThumbnailView = (
                <img
                    src="/static/img/undefined-product-thumbnail.jpg"
                    alt={post.title.rendered}
                />
            );
        }

        //categories
        if (post._embedded['wp:term']) {
            const categories = post._embedded['wp:term'][0];
            if (categories) {
                postCategoriesView = categories.map((item) => (
                    <Link href="/shop" key={item.id}>
                        <a>{item.name}</a>
                    </Link>
                ));
            }
        }

        //author
        if (post._embedded.author) {
            postAuthorView = (
                <Link href="/blog">
                    <a href="#">{post._embedded.author[0].name}</a>
                </Link>
            );
        }
    }
    return (
        <article className="ps-post">
            <div className="ps-post__thumbnail">
                <Link href="/post/[pid]" as={`/post/${post.id}`}>
                    <a className="ps-post__overlay"></a>
                </Link>
                {postThumbnailView}
            </div>
            <div className="ps-post__content">
                <div className="ps-post__meta">{postCategoriesView}</div>
                <Link href="/post/[pid]" as={`/post/${post.id}`}>
                    <a className="ps-post__title">{post.title.rendered}</a>
                </Link>
                <p>
                    {moment(post.date).format('DD MMM, YYYY')} by{' '}
                    {postAuthorView}
                </p>
            </div>
        </article>
    );
};

export default WPPostGrid;
