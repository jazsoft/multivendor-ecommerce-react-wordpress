import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const WPPostDetail = ({ post }) => {
    let postThumbnailView, postAuthorView, postCategoriesView, postTagsView;

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
            const tags = post._embedded['wp:term'][1];
            if (categories) {
                postCategoriesView = categories.map((item) => (
                    <Link href="/shop" key={item.id}>
                        <a>{item.name}</a>
                    </Link>
                ));
            }
            if (tags) {
                postTagsView = tags.map((item) => (
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
        <div className="ps-post--detail ps-post--parallax">
            <div
                className="ps-post__header bg--parallax"
                style={{
                    backgroundImage: `url(/static/img/bg/blog-detail.jpg)`,
                }}>
                <div className="container">
                    <h4>{postCategoriesView}</h4>
                    <h1>{post.title.rendered}</h1>
                    <p>
                        {moment(post.date).format('DD MMM, YYYY')} / By{' '}
                        {postAuthorView}
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="ps-post__content">
                    <div className="ps-document">
                        <div
                            className="ps-document"
                            dangerouslySetInnerHTML={{
                                __html: `${post.content.rendered}`,
                            }}
                        />
                    </div>
                </div>
                <div className="ps-post__footer">
                    <p className="ps-post__tags">
                        Tags:
                        {postTagsView}
                    </p>
                    <div className="ps-post__social">
                        <a className="facebook" href="#">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a className="twitter" href="#">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a className="google" href="#">
                            <i className="fa fa-google-plus"></i>
                        </a>
                        <a className="linkedin" href="#">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a className="pinterest" href="#">
                            <i className="fa fa-pinterest"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WPPostDetail;
