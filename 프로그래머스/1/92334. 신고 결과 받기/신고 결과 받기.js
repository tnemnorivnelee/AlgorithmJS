function solution(id_list, report, k) {
    const reports = new Map();
    const mailCounts = new Map();
    
    for (const id of id_list) {
        reports.set(id, new Set());
        mailCounts.set(id, 0);
    }
    
    for (const reportInfo of report) {
        const [reporter, target] = reportInfo.split(" ");
        
        reports.get(target).add(reporter);
    }
    
    for (const [target, reporters] of reports) {
        if (reporters.size >= k) {
            for (const reporter of reporters) {
                mailCounts.set(reporter, mailCounts.get(reporter) + 1);
            }
        }
    }
    
    const answer = [];
    
    [...mailCounts].map((el) => answer.push(el[1]));
    
    return answer;
}