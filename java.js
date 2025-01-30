document.addEventListener('DOMContentLoaded', function() {
    const jobs = document.querySelectorAll('#job-listings .job');
    const jobDetails = document.getElementById('job-details');

    // Function to update job details
    function updateJobDetails(job) {
        const title = job.querySelector('h2').textContent;
        const company = job.querySelector('p:nth-of-type(1)').textContent.replace('الشركة: ', '');
        const location = job.querySelector('p:nth-of-type(2)').textContent.replace('الموقع: ', '');
        const description = job.querySelector('p:nth-of-type(3)') ? job.querySelector('p:nth-of-type(3)').textContent : 'لا يوجد وصف إضافي.';

        document.getElementById('detail-title').textContent = title;
        document.getElementById('detail-company').textContent = company;
        document.getElementById('detail-location').textContent = location;
        document.getElementById('detail-description').textContent = description;
    }

    // Set the first job as selected by default
    const firstJob = jobs[0];
    updateJobDetails(firstJob);
    firstJob.setAttribute('data-selected', 'true');

    // Add click event listeners to all jobs
    jobs.forEach(job => {
        job.addEventListener('click', function() {
            // Remove the selected state from all jobs
            jobs.forEach(j => j.setAttribute('data-selected', 'false'));
            // Set the clicked job as selected
            job.setAttribute('data-selected', 'true');
            // Update the job details
            updateJobDetails(job);
        });
    });
});