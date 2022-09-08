import { defineConfig } from 'vitepress'
/**
 * @type {import('vitepress').UserConfig}
 */
export default defineConfig({
    lang: 'en-US',
    title: 'Dhruv Dhamani',
    description: 'these are some things I\'ve thought recently',
    // base: "/website/",
    lastUpdated: true,
    outDir: './docs/',
    themeConfig: {
        siteTitle: 'Dhruv Dhamani',
        sidebar: getSidebar()
    },
    footer: {
        message: 'Released under the CC-BY-SA-4.0 License. See license text at https://github.com/DhruvDh/website/blob/main/LICENSE',
    }
})

function getSidebar() {
    return [
        {
            text: 'Resume',
            items: [
                { text: 'Education details', link: '/resume.html#education-details' },
                { text: 'Work experience', link: '/resume.html#work-experience' },
                { text: 'Academic projcets', link: '/resume.html#academic-projects' },
                { text: 'Other work', link: '/resume.html#other-work' },
                { text: 'Technical skills ', link: '/resume.html#technical-skills' },
            ]
        },
        {
            text: 'Teaching Statement',
            items: []
        },
        {
            text: 'Research Statement',
            items: []
        },
        {
            text: 'CS Education',
            items: [
                { text: "Teaching programming in the age of large LM based autocomplete", link: "/cs_education.html#teaching-programming-in-the-age-of-large-lm-based-autocomplete" },
                { text: "A Rust-based curriculum for CS education", link: "/cs_education.html#a-rust-based-curriculum-for-cs-education" },
            ]
        },
        {
            text: 'HPC',
            items: []
        },
        {
            text: 'Released under CC-BY-SA-4.0',
            items: [
                { text: "See license text here.", link: "https://github.com/DhruvDh/website/blob/main/LICENSE" }
            ]
        }]
}