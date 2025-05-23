import prometheus_client

CACHE_HIT = "CACHE_HIT"
CACHE_MISS = "CACHE_MISS"

flagsmith_environment_document_cache_queries_total = prometheus_client.Counter(
    "flagsmith_environment_document_cache_queries_total",
    "Results of cache retrieval for environment document (hit or miss)",
    ["result"],
)
