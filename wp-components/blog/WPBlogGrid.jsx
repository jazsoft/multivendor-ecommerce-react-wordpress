import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import WPPostGrid from '~/wp-components/elements/posts/WPPostGrid';
import WPPostRepository from '~/repositories/WP/WPPostRepository';
import { generateTempArray } from '~/utilities/common-helpers';
import { Pagination, Skeleton } from 'antd';
import SkeletonPostGrid from '~/components/elements/skeletons/SkeletonPostGrid';

const WPBlogGrid = () => {
    const [loading, setLoading] = useState(false);
    const [catLoading, setCatLoading] = useState(false);
    const [postCategories, setPostCategories] = useState(null);
    const [postItems, setPostItems] = useState(null);

    async function getInitData() {
        setLoading(true);
        setCatLoading(true);
        const postQueries = {
            per_page: 8,
        };
        const categories = await WPPostRepository.getCategories();
        const posts = await WPPostRepository.getPosts(postQueries);
        if (posts) {
            setPostItems(posts);
            setLoading(false);
        }
        if (categories) {
            setPostCategories(categories);
            setCatLoading(false);
        }
        return categories;
    }

    async function handlePagination(page, pageSize) {
        const queries = {
            page: page,
            per_page: pageSize,
        };
        setLoading(true);
        const posts = await WPPostRepository.getPosts(queries);
        if (posts) {
            setPostItems(posts);
            setLoading(false);
        }
    }

    useEffect(() => {
        getInitData();
    }, []);

    // Views area

    let blogLinksView, postItemsView, sectionPaginationView;
    if (!catLoading) {
        if (postCategories) {
            const links = postCategories.map((item) => (
                <li key={item.id}>
                    <Link
                        href={`/blog?category=${item.id}`}
                        as={`/blog?category=${item.slug}`}>
                        <a>{item.name}</a>
                    </Link>
                </li>
            ));

            blogLinksView = (
                <ul className="ps-list--blog-links">
                    <li className="active">
                        <Link href="/blog">
                            <a>All</a>
                        </Link>
                    </li>
                    {links}
                </ul>
            );
        }
    } else {
        const skeletonCategories = generateTempArray(6).map((item) => (
            <li key={item}>
                <Skeleton.Input size={30} style={{ width: 150 }} />
            </li>
        ));

        blogLinksView = (
            <ul className="ps-list--blog-links">{skeletonCategories}</ul>
        );
    }

    if (!loading) {
        if (postItems) {
            postItemsView = postItems.items.map((item) => (
                <div
                    className=" col-lg-4 col-md-6 col-sm-12 col-12"
                    key={item.id}>
                    <WPPostGrid post={item} />
                </div>
            ));
            if (postItems.totalItems > 8) {
                sectionPaginationView = (
                    <div className="ps-blog__pagination text-center pt-40">
                        <Pagination
                            total={postItems && postItems.totalItems}
                            pageSize={8}
                            responsive={true}
                            defaultCurrent={1}
                            onChange={handlePagination}
                        />
                    </div>
                );
            }
        } else {
            postItemsView = <p>No post found.</p>;
        }
    } else {
        postItemsView = generateTempArray(8).map((item) => (
            <div
                className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12"
                key={item}>
                <SkeletonPostGrid />
            </div>
        ));
    }

    return (
        <div className="ps-blog">
            <div className="ps-blog__header">{blogLinksView}</div>
            <div className="ps-blog__content">
                <div className="row">{postItemsView}</div>
                {sectionPaginationView}
            </div>
        </div>
    );
};

export default WPBlogGrid;
